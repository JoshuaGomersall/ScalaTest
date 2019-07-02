
	def favouriteBeer(): String = “Guinness”
	println(s”My favourite beer is ${favouriteBeer()}”) // will be evaluated to -> My favourite beer is Guinness

	def favouriteJuice() = “Apple” // type inference infers the return type
	println(s”My favourite juice is ${favouriteJuice()}”) //will be evaluated to -> My favourite juice is Apple
	
	
	def priceOfGuinness(qountity: Int): Double = qountity * 3.5
	println(s”Three pints of Guinness will be ${priceOfGuinness(3)}”) //Three pints of Guinness will be 10.5
	
	
	def priceOfOrangeJuice(qountity: Int = 0): Double = qountity * 2.5
	println(s”One glass of orange juice will be ${priceOfOrangeJuice(1)}”) //One glass of orange juice will be 2.5
	println(s”No glasses of orange juice will be ${priceOfOrangeJuice()}”) //No glasses of orange juice will be 0.0
	
	
	def favouriteBeerPrice(qountity: Int, discountCode:Option[String]): Double = {discountCode match {
	case Some(discount) => (qountity * 3.5) * 0.9
	case None => qountity * 3.5
	}
	}
	println(s”Five pints of Guinness with discount code will be ${favouriteBeerPrice(5, Some(“Buy 5 pints get 10% off”))}”) //Five pints of Guinness with discount code will be 15.75
	println(s”Three pints of Guinness without the discount code will be ${favouriteBeerPrice(3, None)}”) //Three pints of Guinness without the discount code will be 10.5
	
	
	//defining default values
	def favouriteBeerPrice(qountity: Int, discountCode:Option[String] = "None"): Double = {discountCode match {
	case Some(discount) => (qountity * 3.5) * 0.9
	case None => qountity * 3.5
	}
	}
	println(s”Five pints of Guinness with discount code will be ${favouriteBeerPrice(5, Some(“Buy 5 pints get 10% off”))}”) //Five pints of Guinness with discount code will be 15.75
	println(s”Three pints of Guinness without the discount code will be ${favouriteBeerPrice(3)}”)
	//don’t need to pass a second value if we don’t want to 
	//Three pints of Guinness without the discount code will be 10.5