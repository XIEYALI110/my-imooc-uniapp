<template>
		<view class="scrollCon">
			<scroll-view scroll-y class="scroll-item" @scrolltolower="loadMore">
				<view>
					<slot></slot>
				</view>
			</scroll-view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			loadMore(){
				this.$emit('loadMore')
			}
		}	
	}
</script>

<style lang="scss">
	.scrollCon{
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		height: 100%;
		.scroll-item{
			height: 100%;
			flex-direction: column;
		}
	}
</style>
