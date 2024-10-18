-- 코드를 입력하세요
SELECT t1.product_code, sum(t1.price * t2.sales_amount) as sales
from product t1
join offline_sale t2 on t1.product_id = t2.product_id
group by t1.product_code
order by sales desc, product_code asc;
