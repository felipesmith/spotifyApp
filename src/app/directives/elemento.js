export function elemento(){
	return {
		restrict:'E',
		scope:{
		text:'=',
		src:'=',
		action:'&'
		},
		templateUrl: "/app/views/elemento.html",
	}
}