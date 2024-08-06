
type ProjectData = {
    image: string;
    position: string | null;
    link: string;
    title: string;
}

type SliderState = {
    projectsData: Array<ProjectData>;
    currentActiveSlide: number
}