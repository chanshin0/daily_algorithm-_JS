-- 코드를 입력하세요
SELECT T1.INGREDIENT_TYPE, SUM(T2.TOTAL_ORDER) AS TOTAL_ORDER
FROM ICECREAM_INFO T1
JOIN FIRST_HALF T2 ON T1.FLAVOR = T2.FLAVOR
GROUP BY T1.INGREDIENT_TYPE