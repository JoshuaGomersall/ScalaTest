class Person(var name: String, var age: Int)
object Main extends App {

	def showEvaluationOnCall() : Unit = {def person = new Person("John", 36)
		
		//this example will print out -> Persons age is: 36
		println("Persons age is: " + person.age)
		
		//reassign the value of the persons age
		person.age = 32
		
		// this example will print out -> Persons age is: 36
		// the age doesn't change because every time we try to get the age
		// we re-evaluate it, meaning that it will one again be 36
		println("Persons age is: " + person.age)
	}
	showEvaluationOnCall()
}


// 2nd example
class Person(var name: String, var age: Int)
object Main extends App {
	
	def showEvaluationOnDefine() : Unit = {val person = new Person("John", 36)
		// the value is evaluated on the definition therefore even without us calling it first
		// it will automatically have that value assigned to the variable, this example will print out -> Persons age is: 36
		println("Persons age is: " + person.age)
		// we reassign the value of the persons age
		person.age = 32
		// this example will print out -> Persons age is: 32
		// the age change because we're able to reassign the value of persons age
		println("Persons age is: " + person.age)
	}
	showEvaluationOnDefine()
}