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