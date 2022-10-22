import { CategoriesMenu, PostsCarousel, BannerSidebar, Contact } from "./sidebar/index"

export const Sidebar = () => {
    return (
        <section id="sidebar" className="mb-5">

            <CategoriesMenu />

            <PostsCarousel />

            <Contact />

            <BannerSidebar />

        </section>
    )
}