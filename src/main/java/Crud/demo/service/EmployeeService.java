package Crud.demo.service;


import Crud.demo.model.Employee;
import Crud.demo.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository repo;

    public EmployeeService(EmployeeRepository repo) {
        this.repo = repo;
    }

    public List<Employee> findAll() {
        return repo.findAll();
    }

    public Optional<Employee> findById(Long id) {
        return repo.findById(id);
    }

    public Employee save(Employee employee) {
        return repo.save(employee);
    }

    public Employee update(Long id, Employee updated) {
        return repo.findById(id).map(emp -> {
            emp.setFirstName(updated.getFirstName());
            emp.setLastName(updated.getLastName());
            emp.setEmail(updated.getEmail());
            emp.setDepartment(updated.getDepartment());
            return repo.save(emp);
        }).orElseGet(() -> {
            updated.setId(id);
            return repo.save(updated);
        });
    }

    public void deleteById(Long id) {
        repo.deleteById(id);
    }
}
