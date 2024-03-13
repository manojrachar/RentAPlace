package com.property.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.io.File;
import java.io.IOException;

import javax.servlet.ServletContext;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


import com.property.entity.Messages;
import com.property.entity.Owner;
import com.property.entity.Property;
import com.property.entity.ReservedProperty;
import com.property.entity.ResponsePage;
import com.property.service.PropertyService;

@RestController
@RequestMapping("/propertyservice")
@CrossOrigin("http://localhost:4200/")
public class PropertyController {

	@Autowired
	private PropertyService propertyService;
	
	@Autowired
	private ServletContext context;


	@GetMapping("/property/{propid}")
	public ResponseEntity<?> getProperty(@PathVariable int propid) {
		if(this.propertyService.getProperty(propid) != null) {
			Property prop = this.propertyService.getProperty(propid);
			System.out.println(prop);
			return new ResponseEntity<>(prop,HttpStatus.OK);
		}
		return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Login Failed"));
	}

	@GetMapping("/properties/{owner_ownerid}")
	public ResponseEntity<?> propertiesByOwner(@PathVariable(required = true) int owner_ownerid){
		if(this.propertyService.getAllPropertiesByOwnerId(owner_ownerid) != null) {
			List<Property> prop = this.propertyService.getAllPropertiesByOwnerId(owner_ownerid);
			System.out.println(prop);
			return new ResponseEntity<>(prop,HttpStatus.OK);
		}
		return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Fetch Failed"));
	}

	@GetMapping("/properties")
	public ResponseEntity<?>  propertyList() {
		List<Property> properties = propertyService.getAllProperties();
		return new ResponseEntity<>(properties,HttpStatus.OK); 
	}
	
	@GetMapping("/reservedproperties/{user_userid}")
	public ResponseEntity<?> resProperties(@PathVariable int user_userid){
		List<ReservedProperty> properties = propertyService.propertiesReserved(user_userid);
		return new ResponseEntity<>(properties, HttpStatus.OK);
	}

//	@PostMapping("/property")
//	public ResponseEntity<?> addProperty(@RequestBody Property property){
//		System.out.println(property);
//		if(propertyService.addProperty(property)) {
//			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
//		}
//		else {
//			return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Load Failed"));
//		}
//	}
	
	@PostMapping("/propertyadd")  //To add property to database
	public ResponseEntity<HttpStatus> insertProp(@RequestPart(name="prop") String prop,
			@RequestParam("image1") MultipartFile image1,
			@RequestParam("image2") MultipartFile image2,
			@RequestParam("image3") MultipartFile image3) throws JsonProcessingException,IOException  {
		Property property = new ObjectMapper().readValue(prop,Property.class);
		System.out.println(property);
		System.out.println(image1.getOriginalFilename());	
		boolean isExist = new File(context.getRealPath("/propimages/")).exists();
		if(!isExist) {
			new File(context.getRealPath("/propimages")).mkdir();
		}
		String filename1 = image1.getOriginalFilename();
		String modifiedFileName1 = FilenameUtils.getBaseName(filename1)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename1);
		File file1 = new File(context.getRealPath("/propimages/"+File.separator+modifiedFileName1));

		String filename2 = image2.getOriginalFilename();
		String modifiedFileName2 = FilenameUtils.getBaseName(filename2)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename2);
		File file2 = new File(context.getRealPath("/propimages/"+File.separator+modifiedFileName2));

		String filename3 = image3.getOriginalFilename();
		String modifiedFileName3 = FilenameUtils.getBaseName(filename3)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename3);
		File file3 = new File(context.getRealPath("/propimages/"+File.separator+modifiedFileName3));

		try {
			FileUtils.writeByteArrayToFile(file1,image1.getBytes());
			FileUtils.writeByteArrayToFile(file2,image2.getBytes());
			FileUtils.writeByteArrayToFile(file3,image3.getBytes());
		}catch(Exception e) {
			e.getMessage();
		}

		property.setImage1(modifiedFileName1);
		property.setImage2(modifiedFileName2);
		property.setImage3(modifiedFileName3);

		if(propertyService.insertProp(property) != null) {
			System.out.println("Property inserted succesfullu!!");
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.EXPECTATION_FAILED);
	}



	@PutMapping("/property")
	public ResponseEntity<?> updateProperty(@RequestBody Property property) {
		System.out.println(property);
		if(this.propertyService.updateProperty(property)) {
			return ResponseEntity.ok().body(new ResponsePage(Messages.SUCCESS,"Property deleted"));
		}
		else {
			return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Login Failed"));
		}
	}
	
	@PostMapping("/reserve")
	public ResponseEntity<HttpStatus> reserveProperty(@RequestBody ReservedProperty property){
		System.out.println(property);
		if(propertyService.reserveProperty(property)) {
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<HttpStatus>(HttpStatus.EXPECTATION_FAILED);
			
		}
		
	}

	@DeleteMapping("/property/{propid}")
	public ResponseEntity<?> deleteProperty(@PathVariable int propid) {
		if(this.propertyService.deleteProperty(propid)) {
			return ResponseEntity.ok().body(new ResponsePage(Messages.SUCCESS, "Property deleted successfully"));
		}
		else {
			return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Property fetch failed by propertyid"));
		}
	}
}
