-- 코드를 입력하세요
SELECT t1.animal_id, t1.name
from animal_outs t1
left join animal_ins t2 on t1.animal_id = t2.animal_id
where t2.animal_id is null
order by t1.animal_id asc;