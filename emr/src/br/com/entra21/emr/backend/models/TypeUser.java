package br.com.entra21.emr.backend.models;

public enum TypeUser {
	ADMIN("Superusers"),DOCTOR("Doctors users"), USER("Common user");

	private final String value;

	TypeUser(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}
}
