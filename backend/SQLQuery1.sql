alter procedure findRecipeID
	@product_id int,
	@ingredient_id int,
	@ingre_amount int
as
declare @id int
begin
	set @id = 0
	while (exists(select PR.id from Product_recipe PR where PR.id = @id))
		set @id = @id + 1

	insert into Product_recipe values (@id,@product_id,@ingredient_id,@ingre_amount)
end

exec findRecipeID 1,1,1

CREATE PROCEDURE getOrderForManage
AS
SELECT (first_name + last_name) as [fullname],total_item,amount,[status] 
FROM [User],[Order],[Order_payment]
WHERE [User].id = [Order].user_id and [Order].Payment_id = [Order_payment].id
GO

exec getOrderForManage


alter procedure getListProduct
as
begin 
	select pc.[name] as category_id,prod_quantity as inventory_id,discount_id,p.[name],p.[desc],price
	from Product_inventory [pi],Product p,Product_category pc
	where [pi].id = p.inventory_id and p.category_id = pc.id
end

exec getListProduct

alter procedure getRecipeByProductID
	@id int
as
begin
	select p.[name],[pi].[name] as ingre_name,[pi].ingre_quantity
	from Product_recipe pr, Product p, Product_ingredient [pi]
	where product_id = @id and pr.ingredient_id = [pi].id and pr.product_id = p.id
end

exec getRecipeByProductID 2