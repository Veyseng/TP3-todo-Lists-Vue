<template>
	<button @click="MarkDone">Done</button>
</template>
<script>
export default {
	setup() {
		
	},
	methods:{
		MarkDone(){
			this.$emit('MarkDone')
		}
	}

}
</script>