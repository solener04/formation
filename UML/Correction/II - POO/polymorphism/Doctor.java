package fr.dtek.dms.core.service.service.formation.polymorphism;

public class Doctor extends PersonBase {
    private String title;

    public Doctor(String lastName, String firstName, Integer age, String title) {
        super(lastName, firstName, age);
        this.title = title;
    }

    @Override
    public void displayInformation() {
        super.displayInformation();

        System.out.print("\nTitle : " + title + "\n");
    }
}
