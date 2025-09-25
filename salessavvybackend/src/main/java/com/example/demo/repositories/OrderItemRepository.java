package com.example.demo.repositories;


	import com.example.demo.entities.OrderItem;
	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;
	import org.springframework.data.jpa.repository.Query;
	import org.springframework.data.repository.query.Param;

	import java.util.List;

	@Repository
	public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {

	    @Query("SELECT oi FROM OrderItem oi WHERE oi.order.orderId = :orderId")
	    List<OrderItem> findByOrderId(@Param("orderId") String orderId);
	    
	    @Query("SELECT oi FROM OrderItem oi WHERE oi.order.userId = :userId AND oi.order.status = 'SUCCESS'")
	    List<OrderItem> findSuccessfulOrderItemsByUserId(int userId);

	}

