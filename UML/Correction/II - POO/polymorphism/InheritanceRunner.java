package fr.dtek.dms.core.service.service.formation.polymorphism;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class InheritanceRunner {
    @Test
    public void runApplication() {
        Doctor doctor1 = new Doctor("Legrand", "Louis", 34, "Chirugian");
        Soldier soldier1 = new Soldier("Dupuis", "Laura", 27);
        List<PersonBase> personBaseList1 = new ArrayList<>();
        personBaseList1.add(doctor1);
        personBaseList1.add(soldier1);

        ////////////////////////////// EXAMPLE 1 //////////////////////////////
        for (PersonBase current : personBaseList1) {
            current.displayInformation();
        }

        System.out.print("\n\n---------------------------------------------------------------------\n");

        ////////////////////////////// EXAMPLE 2 //////////////////////////////

        for (PersonBase current : personBaseList1) {
            current.doJob("Lyon");
        }

        System.out.print("\n---------------------------------------------------------------------\n");

        ////////////////////////////// EXAMPLE 3 //////////////////////////////

        for (PersonBase current : personBaseList1) {
            current.doJob(2);
        }
    }
}