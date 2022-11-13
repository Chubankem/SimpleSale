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

	insert into Product_recipe(id,product_id,ingredient_id,ingre_amount) values (@id,@product_id,@ingredient_id,@ingre_amount
end
SET IDENTITY_INSERT Product_recipe ON;
exec findRecipeID 1,3,1
select*from Product_recipe

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
	select p.id, pc.[name] as category_id,prod_quantity as inventory_id,discount_id,p.[name],p.[desc],price
	from Product_inventory [pi],Product p,Product_category pc
	where [pi].id = p.inventory_id and p.category_id = pc.id
end

exec getListProduct


alter procedure getRecipeByProductID2
as
begin
	select	p.[name] as product_id,[pi].[name] as ingredient_id, pr.ingre_amount,pr.id
	from Product p, Product_ingredient [pi], Product_recipe pr
	where p.id = pr.product_id and [pi].id = pr.ingredient_id
end


create procedure getRecipeByProductID
	@id int
as
begin
	select p.[name],[pi].[name] as ingre_name,[pi].ingre_quantity
	from Product_recipe pr, Product p, Product_ingredient [pi]
	where product_id = @id and pr.ingredient_id = [pi].id and pr.product_id = p.id
end

exec getRecipeByProductID 1


alter procedure getEditProduct
@id int
as
begin 

	select p.id, pc.[name] as category_id,p.[name],p.[desc],p.price
	from Product p,Product_category pc
	where p.id = @id and pc.id = p.category_id
end

exec getEditProduct 1