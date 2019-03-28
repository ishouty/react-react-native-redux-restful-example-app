//transition configuration
export const transitionConfig = () => {
    return {
        screenInterpolator: sceneProps => {
            const {index, mode, progress, layout, position, scene} = sceneProps

   /*         console.log('screen interpolator')
            console.log(layout, 'LAYOUT')
            console.log(position, 'POSITION')
            console.log(scene, 'SCENE')
            console.log('screen interpolator')*/

            const thisSceneIndex = scene.index
            const width = layout.initWidth
            const height = layout.initHeight

            const slideFromBottomTransitionInterpolator = (index, position) => {

                const translateY = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                    outputRange: [height, 0, 0]
                })

                return { transform: [{ translateY }] }

            }

            const slideFromTopTransitionInterpolator = (index, position) => {

                const translateY = position.interpolate({
                    inputRange: [thisSceneIndex -1  , thisSceneIndex, thisSceneIndex + 1],
                    outputRange: [-height, 0, 0],
                });

                return {
                    transform: [{ translateY }],
                };

            }

            const scaleWithOpacityTransitionInterpolator = (index, position) => {

                const scale = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                    outputRange: [4, 1, 1]
                })

                const opacity = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
                    outputRange: [0, 1, 1],
                })

                return { opacity, transform: [{ scaleX: scale }, { scaleY: scale }] }

            }

            const opacityTransitionInterpolator = (index, position) => {

                const opacity = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
                    outputRange: [0, 1, 1],
                })

                return {opacity}

            }

            const slideFromRightTransitionInterpolator = (index, position) => {

                const translateX = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [width, 0],
                })

                const slideFromRight = { transform: [{ translateX }] }
                return slideFromRight

            }


            const {route} = scene
            const params = route.params || {};
            const transition = params.transition || "default"

            return {
                slideFromBottomTransition: slideFromBottomTransitionInterpolator(index, position),
                slideFromTopTransition: slideFromTopTransitionInterpolator(index, position),
                scaleWithOpacityTransition: scaleWithOpacityTransitionInterpolator(index,position),
                default: slideFromRightTransitionInterpolator(index, position)
            }[transition];

        }
    }

}
