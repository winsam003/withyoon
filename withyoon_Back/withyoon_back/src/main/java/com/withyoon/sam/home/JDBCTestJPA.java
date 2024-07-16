package com.withyoon.sam.home;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JDBCTestJPA extends JpaRepository<JDBCTestEntity, Integer> {
    // 추가적인 메서드 정의가 필요하다면 여기에 작성할 수 있습니다.
}