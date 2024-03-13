package com.property.entity;

public class ResponsePage {

	private Messages message;
	private String description;

	public ResponsePage() {

	}

	public ResponsePage(Messages message, String description) {
		super();
		this.message = message;
		this.description = description;
	}

	public Messages getMessage() {
		return message;
	}

	public void setMessage(Messages message) {
		this.message = message;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "ResponsePage [message=" + message + ", description=" + description + "]";
	}

}
