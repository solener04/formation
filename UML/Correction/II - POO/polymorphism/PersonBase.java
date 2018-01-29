package fr.dtek.dms.core.service.service.formation.polymorphism;

public class PersonBase {
    private String lastName;
    protected String firstName;
    public Integer age;

    public PersonBase(String lastName, String firstName, Integer age) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
    }

    public void displayInformation() {
        System.out.print("\nLast name : " + this.lastName);
        System.out.print("\nFirst name : " + this.firstName);
        System.out.print("\nAge : " + this.age);
    }

    public void doJob(String location) {
        System.out.print("\nWork in the place : " + location);
    }

    public void doJob(Integer nbTarget) {
        System.out.print("\nNumber of target : " + nbTarget);
    }
}
