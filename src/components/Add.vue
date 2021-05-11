<template>
	<button @click="AddList">Add</button>
</template>
<script>
export default {
	setup() {
		
	},
	methods:{
		AddList(){
			this.$emit('AddList')
		}
	}

}
</script>
<style scoped>
	button{
		padding: 5px;
		border: 1px solid #4aa96c;
		outline: none;
		color: #4aa96c;
	}
	
</style>