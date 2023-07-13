import React from 'react';

import styles from './ContributionCalendar.module.css';

import * as S from './ContributionCalendar.styles';

const ContributionCalendar = () => {

  // const today = new Date();
  // const today = new Date('2023-05-22');
  // console.log(`today : ${today.toLocaleDateString()}`);
  // console.log(`연 : ${today.getFullYear()}`);
  // console.log(`월 : ${today.getMonth()}`);
  // console.log(`일 : ${today.getDate()}`);
  // console.log(`요일 : ${today.getDay()}`);
  // console.log(`전체 일자 : ${today.getTime()}`);
  
  
  // console.log(`+7일 : ${today.setDate(today.getDate() + 7)}`);
  // console.log(`일 : ${today.toLocaleString()}`);
  
  // const day2 = new Date('2023-01-01');
  // console.log(day2.toLocaleDateString());

  // const diff = today.getTime() - day2.getTime();
  // const diffDays = Math.abs(diff / (60000 * 60 * 24));
  // console.log('날짜 일수 차이 : ', diffDays);

  // const weeks = Math.ceil(diffDays / 7);
  // console.log('총 주차 수 : ', weeks);

  const createCalendar = () => {
    const firstDayofYear = new Date('2022-01-01');
    // console.log(firstDayofYear);
    // 이전년도에서 추가해야 되는 경우 (1/1일이 월요일이 아닌 경우 모두 다)
    let diff = firstDayofYear.getDay();
    if (firstDayofYear.getDay() !== 0) {
      firstDayofYear.setDate(firstDayofYear.getDate() - firstDayofYear.getDay());
      // console.log(firstDayofYear);
      for (let i = diff; i > 0; i--) {
        // console.log(firstDayofYear);
        let lastYearDay = firstDayofYear.setDate(firstDayofYear.getDate() + 1);
        // console.log(lastYearDay);
        // console.log(firstDayofYear.getDate());
      }
    }

    // 올해
    // for (let row = 0; row < 7; row++) {
    //   for (let i = 0; i < weeks; i++) {
        
    //   }
    // }
  };

  createCalendar();

  return (
    <>
      <S.Graph>
      {/* <table className={styles.calendar}> */}
      <S.Calendar>
        <thead>
          <tr className={styles.calendarRow}>
            <td>
              <span></span>
            </td>
            <td colSpan={4}>
              <span>May</span>
              {/* <span>May</span> */}
            </td>
            <td colSpan={4}>
              <span>Jun</span>
            </td>
            <td colSpan={5}>
              <span>Jul</span>
            </td>
            <td colSpan={4}>
              <span>Aug</span>
            </td>
            <td colSpan={4}>
              <span>Sep</span>
            </td>
            <td colSpan={5}>
              <span>Oct</span>
            </td>
            <td colSpan={4}>
              <span>Nov</span>
            </td>
            <td colSpan={4}>
              <span>Dec</span>
            </td>
            <td colSpan={5}>
              <span>Jan</span>
            </td>
            <td colSpan={4}>
              <span>Feb</span>
            </td>
            <td colSpan={4}>
              <span>Mar</span>
            </td>
            <td colSpan={5}>
              <span>Apr</span>
            </td>
          </tr>
        </thead>
        <tbody>
        <tr className={styles.calendarRow}>
            <td className={styles.calendarDayLabel}><span></span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
          </tr>
          <tr className={styles.calendarRow}>
            <td className={styles.calendarDayLabel}><span>Mon</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
          </tr>
          <tr className={styles.calendarRow}>
            <td className={styles.calendarDayLabel}><span></span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
          </tr>
          <tr className={styles.calendarRow}>
            <td className={styles.calendarDayLabel}><span>Wed</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
          </tr>
          <tr className={styles.calendarRow}>
            <td className={styles.calendarDayLabel}><span></span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
          </tr>
          <tr className={styles.calendarRow}>
            <td className={styles.calendarDayLabel}><span>Fri</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
          </tr>
          <tr className={styles.calendarRow}>
            <td className={styles.calendarDayLabel}><span></span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
            <td className={styles.calendarDay}><span>c</span></td>
          </tr>
        </tbody>
      </S.Calendar>
      </S.Graph>
    </>
  );
}

export default ContributionCalendar;