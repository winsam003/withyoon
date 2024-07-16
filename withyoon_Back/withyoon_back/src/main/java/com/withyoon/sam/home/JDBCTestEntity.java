package com.withyoon.sam.home;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="connectiontesttable")
public class JDBCTestEntity {
	
	@Id
	int no;
	
	String name;
	
	
}
