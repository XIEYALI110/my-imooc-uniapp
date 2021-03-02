<template>
	<list-scroll class="list-scroll" @loadMore="loadMore">
		<list-card   v-for="(item,index) in list" :key="index" :item="item"></list-card>
		<uni-load-more iconType="snow" v-if="!list.length  || list.length > pageSize - 1" :status="load.load || 'loading'"></uni-load-more>
		<!-- <list-card  :mode="'base'"></list-card>
		<list-card  :mode="'image'"></list-card>
		<list-card  :mode="'column'"></list-card>
		<list-card  :mode="'column'"></list-card>
		<list-card  :mode="'column'"></list-card>
		<list-card  :mode="'column'"></list-card> -->
	</list-scroll>
</template>

<script>
	export default{
		props: {
			list: {
				type: Array,
				default(){
					return []
				}
			},
			load: {
				type: Object,
				default(){
					return {
						load: 'loading'
					}
				}
			},
			pageSize: {
				type: Number,
				default: 1
			}
		},
		methods: {
			loadMore(){
				this.$emit('loadMore')
			}
		}
	}
</script>

<style>
</style>
