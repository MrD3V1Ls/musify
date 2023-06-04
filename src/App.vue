<template>
	<div id="app" style="height:100%;">
		<router-view />
	</div>
</template>
<script>

// @ is an alias to /src
import store from "@/store";
export default {
	store,
	name: "App",
	mixins: [],
	components: {

	},
	data: function () {
		return {

		};
	},
	computed: {
	},
};
</script>

<style>
body {
	background-color: #15111e;
}
</style>


