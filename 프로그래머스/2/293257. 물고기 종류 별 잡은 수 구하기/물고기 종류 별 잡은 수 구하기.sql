SELECT COUNT(T3.FISH_TYPE) AS FISH_COUNT, T3.FISH_NAME
FROM (
    SELECT T1.FISH_TYPE, T2.FISH_NAME
    FROM FISH_INFO T1
    JOIN FISH_NAME_INFO T2 ON T1.FISH_TYPE = T2.FISH_TYPE 
) AS T3
GROUP BY T3.FISH_TYPE, T3.FISH_NAME
ORDER BY 1 DESC;