<template>
    <!--ToolTip-->
    <v-sheet
        :width = 500
        :height = 500
        color="transparent"
        class="custom-card"
    >

        <!--TooltipArrow-->
        <v-icon
        v-if="toolTipShow"
        size="x-large"
        color="surface"
        :icon="toolTipOrientation[toolTipPos]"
        class="animate__animated animate__fadeInUp"
        :class="tooTipSelect[toolTipPos]"
        :style="{ 
            marginTop: toolTipAdjust[0] + 'px', 
            marginRight: toolTipAdjust[1] + 'px',
            marginBottom: toolTipAdjust[2] + 'px',
            marginLeft: toolTipAdjust[3] + 'px'   
        }"
        />

        <v-card
        :width="toolTipW > 0 ? toolTipW : appStore.isMobile ? '360' : '420'"
        class="mx-auto d-flex fustify-start rounded-lg pa-4 custom-card rounded-xl"
        elevation="4"
        >

            <v-img 
            class="mx-1 animate__animated animate__shakeY"
            :class="appStore.isDarkMode ? 'white-svg' : '' "
            src="@/assets/img/quest-menu-img.svg"
            width="60"
            /> 

            <v-container class="pa-0">
                <v-card-text class="pt-4 pb-8">
                    <slot name="text"/>
                </v-card-text>

                <v-container
                v-if="!hideToolTipButton"
                class="pa-0 d-flex justify-end"
                >
                    <v-btn 
                    density="comfortable"
                    class="bg-primary text-secondary animate__animated animate__fadeIn"
                    rounded
                    @click="$emit('my-click-event')"
                    >
                        PROSSEGUIR
                    </v-btn>
                </v-container>
            </v-container>
        </v-card>
    </v-sheet>
</template>


<script setup>

    import { ref, onMounted } from 'vue';
	import { useAppStore } from '@/store/app'
	const appStore = useAppStore()

    const tooTipSelect = ref([
        'tool-tip-pos-top',
        'tool-tip-pos-right',
        'tool-tip-pos-bottom',
        'tool-tip-pos-left'
    ])

    const toolTipOrientation = ref ([
        'mdi-triangle',
        'mdi-triangle mdi-rotate-90',
        'mdi-triangle mdi-rotate-180',
        'mdi-triangle mdi-rotate-270'
    ])

    const bubbleSize = ref([500, 500])


    const props = defineProps({
        toolTipShow: Boolean,
        toolTipPos: Number,
        toolTipAdjust: Array,
        hideToolTipButton: Boolean,
        toolTipW: Number,
        toolTipH: Number,
        toolTipR: Number,
    })

    const emit = defineEmits(['start-event', 'my-click-event'])

    onMounted(() => {
        emit('start-event')
    })
</script>

<style scoped>
	.custom-card{
		position: fixed;
        z-index: 6000 !important;
		top:50%;
		left:50%;
		transform: translate(-50%, -50%);
	}

	.tool-tip-pos-top{
		position: relative !important;
		top:50%;
		left:50%;
		transform: translate(-50%, -110px)  !important;
        line-height: .6 !important;
    }
    .tool-tip-pos-right{
		position: relative;
		top:50%;
		left:50%;
		transform: translate(185px, -50%) !important;
        line-height: .6 !important;
    }
    .tool-tip-pos-bottom{
		position: relative;
		top:50%;
		left:50%;
		transform: translate(-50%, 80px) !important;
        line-height: .6 !important;
    }
    .tool-tip-pos-left{
		position: relative;
		top:50%;
		left:50%;
		transform: translate(-215px, -50%) !important;
        line-height: .6 !important;
    }

</style>