<template>
	<div class="todo">
		<h4><input type="text" v-model="text" placeholder="Input your todo text"><the-add @AddList="AddList"/></h4>
		
		<hr>
		
		<div v-for="(List,index) in Lists" :key="index">
			<h4>
				<span class="ListElement">{{ List.element }}</span>
			</h4>
			<small class="badge" v-if="List.done">Status: Done</small>
			<small class="badge" v-else>Status: Pending <mark-done @MarkDone="MarkDone(index)"/></small>
				<the-delete @DeleteList="DeleteList(List)" />
			<hr>
		</div>
		<div v-if="Lists.length === 0">
			Empty Lists
		</div>
	</div>
	
</template>

<script>
import MarkDone from '../components/MarkDone'
export default {
	components: {
		'mark-done' : MarkDone
	},
	data(){
		return{
			Lists : [
				{
					element : "Review for upcoming exam",
					done : true
				},
				{
					element : "Do exercise in the evening",
					done : false
				}
			],
			text : ''
		}
	},
	emits: ['AddList', 'DeleteList'],
	setup() {

	},
	methods:{
		AddList(){
			if(this.text === ""){
				alert("Please input the text")
			}else{
				this.Lists.push(
					{ 
					element : this.text,
					done : false
					}
				)
			}
			
			this.text = ''
		},
		DeleteList(deletelist){
			this.Lists = this.Lists.filter(todo => todo !== deletelist);
		},MarkDone(index){
			this.Lists[index].done = true;
		}
	}
}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

	* {
		margin: 0;
		font-family: "Quicksand";
		color: #333;
	}
	.todo{
		height: 100%;
		width: 90%;
		border-radius: 10px;
		border: solid 1px #4aa96c;
		background-color : #eee;
		max-width: 1080px;
		margin: 20px auto;	
		box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
	}
	h1{
		margin: 20px 0;
		padding: 10px;
		border: solid 1px #f1f1f1f1;
		margin: 0 10px;
	}
	hr{
		height: 1px;
		background-color: #fff;
		border: none;
		margin-bottom: 20px;
	}
	input{
		padding: 5px;
		width: 50%;
		border: 1px solid #4aa96c;
		border-right: none;
		color: #999;
		outline: none;
		margin: 10px auto;
	}
	.ListElement{
		color:#4aa96c;
	}
</style>