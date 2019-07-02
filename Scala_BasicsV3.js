def dailyCoupon(): Option[String] = {
Some(“Coupon value that we retrieved from DB”)
}
println(s”The coupon for today is ${dailyCoupon().get}”)
//The coupon for today is Coupon value that we retrieved from DB



def dailyCoupon(): Option[String] = {
	Some(“Coupon value that we retrieved from DB”)
} // we use getOrElse and provide a default value if there wouldn’t be one for us to use
println(s”The coupon for today is ${dailyCoupon()
.getOrElse(“There are no coupons for today”)}”) 
//The coupon for today is Coupon value that we retrieved from DB

// another way to deal with optionals is to use map function which is going to ignore non existent values
dailyCoupon() map {value => s”The coupon for today is $value”}

// another way to deal with optionals is to use pattern matching
dailyCoupon() match {
	case Some(value) => println(s”The coupon for today is $value”)
	case None => println(“There are no coupons for today”)
}