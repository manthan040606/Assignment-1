const product=[];
function f1()
{
    let name=document.getElementById("proname").value;
    let price=parseFloat(document.getElementById("price").value);
    let quantity=parseInt(document.getElementById("quantity").value);

    if(!name || isNaN(price) || isNaN(quantity) || price<=0 || quantity<=0)
    {
        alert("Enter first all fields");
    }
    else
    {
        let newproduct={name,price,quantity};
        product.push(newproduct);

        document.getElementById("proname").value="";
        document.getElementById("price").value="";
        document.getElementById("quantity").value="";
    

    let list=document.createElement("li");
    list.textContent = `Product: ${name}, Price: $${price.toFixed(2)}, Quantity: ${quantity}`;

    let deletebutton = document.createElement("button");
        deletebutton.textContent = "Delete";
        deletebutton.classList.add("delete-button");
        deletebutton.onclick = function () {
            // Remove product from array
            let index = product.indexOf(newproduct);
            if (index !== -1) {
                product.splice(index, 1);
            }
            // Remove the list item from DOM
            list.remove();
            f2(); // Update total
        };

        // Append delete button to the list item
        list.appendChild(deletebutton);

    let addlist = document.getElementById("cartlist");
    addlist.appendChild(list);

    f2();
    }
    
}
function f2()
{
    let total=0;
    product.forEach(p=>{total+=p.price * p.quantity});
    document.getElementById("totalPrice").textContent = `$${total}`;
}