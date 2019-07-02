
	val list: List[string] = List(
		"apple"
		"orange"
		"kiwi"
	)
	
	//prints out 1st value in list
	println(s"Getting element from the list by the index:${list(0)}")
	
	//prints out 1st value in list
	println(s"Getting 1st element from list: ${list.head}")
	
	//prints out last value in list
	println(s"Getting last element from list: ${list.last}")
	
	//prints out list ignoring 1st value
	println(s"Ignoring the first element and returning the list: ${list.tail}")
	
	
	
	val listBuffer = scala.collection.mutable.ListBuffer.empty[Int]	
	listBuffer += 1 // adding an item to the list buffer, it will now be evaluated to -> ListBuffer(1)
	listBuffer += 33 // adding an item to the list buffer, it will now be evaluated to -> ListBuffer(1, 33)
	listBuffer.toList // converting ListBuffer to List, it will now be evaluated to -> List(1, 33)