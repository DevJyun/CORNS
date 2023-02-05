package com.w6w.corns.domain.report;

import com.w6w.corns.util.BaseTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.DynamicInsert;

@DynamicInsert
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
@Entity
public class Report extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reportNo;

    private int value;
}
