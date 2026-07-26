package com.example.bloodbank.controller;

import com.example.bloodbank.model.Donor;
import com.example.bloodbank.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donors")
@CrossOrigin(origins = "*") // Frontend connectivity handles smoothly
public class DonorController {

    @Autowired
    private DonorRepository donorRepository;

    @GetMapping
    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }

    @PostMapping
    public Donor addDonor(@RequestBody Donor donor) {
        if(donor.getAge() < 18 || donor.getAge() > 65) {
            throw new IllegalArgumentException("Age must be between 18 and 65");
        }
        return donorRepository.save(donor);
    }

    @GetMapping("/search")
    public List<Donor> searchByBloodGroup(@RequestParam String bloodGroup) {
        return donorRepository.findByBloodGroup(bloodGroup);
    }
}
