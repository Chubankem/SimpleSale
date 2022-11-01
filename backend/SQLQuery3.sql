CREATE PROCEDURE getOrderForManage
AS
SELECT (first_name + last_name) as [fullname],total_item,amount,[status] 
FROM [User],[Order],[Order_payment]
WHERE [User].id = [Order].user_id and [Order].Payment_id = [Order_payment].id
GO

exec getOrderForManage
