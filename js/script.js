var myApp = angular.module('myApp',[]);
var data = {
	user: 'Taras Beyda',
	task: [
	{
		nameTask: 'Вивчити Angular',
	},
	{
		nameTask: 'Винести мусор',
	}
	]
}
myApp.controller('TaskCtrl', function(){
	this.data = data;
	this.addTask = function(){
		if (this.newTask == '') {
			return;
		} else {
			this.data.task.push({nameTask: this.newTask});
		}
		this.newTask = '';
	};
	this.removeTask = function(e){
		var indexRemove = $('input[value="Delete"]').index(e.target);
		this.data.task.splice(indexRemove, 1);
	};
	this.clickEditTask = function(e){
		$('.pop__up').show();
		var indexEdit = $('input[value="Edit"]').index(e.target);
		this.editTask = function(){
			this.data.task.splice(indexEdit, 1, {
				nameTask: this.newEdit
			});
			$('div.pop__up input[type="text"]').val('');
			$('.pop__up').hide();
		}
	};
	this.clickCheckTask = function(e){
		var indexCheck = $('input[type="checkbox"]').index(e.target);
		if ($('input[type="checkbox"]').eq(indexCheck).hasClass('ch')) {
			$('input[type="checkbox"]').eq(indexCheck).removeClass('ch');
			$('span.inProgress').eq(indexCheck).css('display', 'block');
			$('span.done').eq(indexCheck).css('display', 'none');
		} else {
			$('input[type="checkbox"]').eq(indexCheck).addClass('ch');
			$('span.inProgress').eq(indexCheck).css('display', 'none');
			$('span.done').eq(indexCheck).css('display', 'block');
		}
	}
});