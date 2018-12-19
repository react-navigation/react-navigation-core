interface Props {
  scene: Scene;
  scenes: Scene[];
}

interface Scene {
  isActive: boolean;
  index: number;
}

interface SceneIndices {
  first: number;
  last: number;
}

function getSceneIndicesForInterpolationInputRange(props: Props): SceneIndices;
function getSceneIndicesForInterpolationInputRange(props: Props): null;
function getSceneIndicesForInterpolationInputRange(props: Props) {
  const { scene, scenes } = props;
  const index: number = scene.index;
  const lastSceneIndexInScenes: number = scenes.length - 1;
  const isBack: boolean = !scenes[lastSceneIndexInScenes].isActive;

  if (isBack) {
    const currentSceneIndexInScenes: number = scenes.findIndex(
      item => item === scene
    );
    const targetSceneIndexInScenes: number = scenes.findIndex(
      item => item.isActive
    );
    const targetSceneIndex: number = scenes[targetSceneIndexInScenes].index;
    const lastSceneIndex: number = scenes[lastSceneIndexInScenes].index;

    if (
      index !== targetSceneIndex &&
      currentSceneIndexInScenes === lastSceneIndexInScenes
    ) {
      return {
        first: Math.min(targetSceneIndex, index - 1),
        last: index + 1,
      };
    } else if (
      index === targetSceneIndex &&
      currentSceneIndexInScenes === targetSceneIndexInScenes
    ) {
      return {
        first: index - 1,
        last: Math.max(lastSceneIndex, index + 1),
      };
    } else if (
      index === targetSceneIndex ||
      currentSceneIndexInScenes > targetSceneIndexInScenes
    ) {
      return null;
    } else {
      return { first: index - 1, last: index + 1 };
    }
  } else {
    return { first: index - 1, last: index + 1 };
  }
}

export default getSceneIndicesForInterpolationInputRange;
