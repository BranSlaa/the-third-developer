<script>
	export let left = 33;
	export let top = 50;
	
	let moving = false;
	
	function onMouseDown(event) {
		if(event.shiftKey) {
			moving = true;
		}
	}
	
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}
</script>

<style>
	.draggable {
		user-select: none;
		cursor: move;
		border: solid 1px gray;
		position: absolute;
		width: 333px;
		height: 80vh;
		overflow: auto;
		resize: both;
	}
</style>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable">
	<slot></slot>
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
