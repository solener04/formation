package fr.dtek.dms.core.service.service.formation.polymorphism;

public class Soldier extends PersonBase {
    public Soldier(String lastName, String firstName, Integer age) {
        super(lastName, firstName, age);
    }

    public void doJob(String location) {
        System.out.print("\n");
        super.doJob(location);
        System.out.print("\nThis place is a war place\n");
    }

    public void doJob(Integer nbTarget) {
        System.out.print("\n");
        super.doJob(nbTarget);
        System.out.print("\nThis target is the number of enemies\n");
    }
}