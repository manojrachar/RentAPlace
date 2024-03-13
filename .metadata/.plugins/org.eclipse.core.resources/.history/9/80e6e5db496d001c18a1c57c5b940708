package com.property.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.property.entity.Login;
import com.property.entity.Messages;
import com.property.entity.Owner;
import com.property.entity.ResponsePage;
import com.property.service.OwnerService;

@RestController
@RequestMapping("/ownerservice")
@CrossOrigin("http://localhost:4200/")
public class OwnerController {

	@Autowired
	private OwnerService ownerService;



	@PostMapping("/authenticate")
	public ResponseEntity<?> validateOwner(@RequestBody Login login) {
		System.out.println(login);
		if(this.ownerService.validate(login)) {
			return ResponseEntity.ok().body(new ResponsePage(Messages.SUCCESS,"Login Success"));
		}
		else {
			return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Login Failed"));
		}
	}


	@GetMapping("/owner/{email}")
	public ResponseEntity<?> getOwnerByEmail(@PathVariable String email) {
		if(this.ownerService.getOwnerDetails(email) != null) {
			Owner owner = this.ownerService.getOwnerDetails(email);
			return new ResponseEntity<>(owner,HttpStatus.OK);
		}
		return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Owner fetch failed by email"));	 
	}

	@GetMapping("/owners")
	@CrossOrigin
	public List<Owner> getallOwners(){
		return this.ownerService.getAllOwners();
	}

	@PutMapping("/owner")
	public ResponseEntity<?> updateOwner(@RequestBody Owner owner){
		if(this.ownerService.updateOwner(owner)) {
			return ResponseEntity.ok().body(HttpStatus.OK);		
		}
		else {
			return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Owner update failed"));
		}
	}

	@PostMapping("/owner")
	public ResponseEntity<?> addOwner(@RequestBody Owner owner){
		System.out.println(owner);
		if(this.ownerService.addOwner(owner)) {
			return ResponseEntity.ok().body(HttpStatus.OK);		
		}
		else {
			return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Owner update failed"));
		}

	}
}
