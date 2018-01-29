package fr.dtek.dms.core.service.service.formation.inheritance;

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
}
