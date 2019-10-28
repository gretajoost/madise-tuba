export default {
    template: `
    	<a-entity>
            <a-plane position="0 2.5 0" shadow="recieve: true" material="side: double; color: white; transparent: true; opacity: 0.5"  width="10" height="5" class="wall">
                <a-entity position="0 0 0.01">
                    <!-- pilt läheb siia -->
                    <slot />
                    <!--  -->
                </a-entity>
            </a-plane>
        </a-entity>
    `
}