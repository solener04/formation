package fr.dtek.dms.core.service.service.formation.inheritance;
import org.junit.Test;

public class InheritanceRunner {
    @Test
    public void runApplication() {
        ////////////////////////////// EXAMPLE //////////////////////////////
        // Doctor
        PersonBase doctor = new Doctor("Legrand", "Louis", 34, "Chirugian");
        doctor.displayInformation();
        // doctor.lastName = "Legrand - NEW"; ==> PAS POSSIBLE

        System.out.print("\n\n--- Modification d'un attribut parent (firstName) \n");

        doctor.firstName = "Louis - NEW";
        doctor.displayInformation();

        System.out.print("\n\n---------------------------------------------------------------------\n");

        // Doctor
        PersonBase soldier = new Soldier("Dupuis", "Laura", 27);
        soldier.displayInformation();

        // doctor.lastName = "Dupuis - NEW"; ==> PAS POSSIBLE

        System.out.print("\n\n--- Modification d'un attribut parent (age) \n");

        soldier.age = soldier.age + 2;
        soldier.displayInformation();
    }
}