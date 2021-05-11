<template>
	<button @click="DeleteList">Delete</button>
</template>
<script>
export default {
	setup() {
		
	},
	methods:{
		DeleteList(){
			this.$emit('DeleteList')
		}
	}

}
</script>
<style scoped>
	
	button{
		color: red;
		border: solid 1px red;
	}
</style>