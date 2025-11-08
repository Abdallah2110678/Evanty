package com.learning_platform.backend.models;

public enum Role {
    ADMIN(" ADMIN"),
    THERAPIST("THERAPIST"),
    PATIENT("PATIENT"),;

    private String role;

    Role(String role) {
        this.role = role;
    }

    public String getValue() {
        return role;
    }
}