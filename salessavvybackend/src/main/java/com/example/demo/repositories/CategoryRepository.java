package com.example.demo.repositories;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Category;

	@Repository
	public interface CategoryRepository extends JpaRepository<Category, Integer> {
	  // Optional<Category> findByCategoryName(String categoryName);
	  Optional<Category> findByCategoryNameIgnoreCase(String categoryName);
		/*@Query("SELECT c FROM Category c WHERE LOWER(TRIM(c.categoryName)) = LOWER(TRIM(:categoryName))")
		Optional<Category> findByCategoryNameIgnoreCaseTrimmed(String categoryName);
		*/
}

