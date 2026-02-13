import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import lustfulLoveCover from "@/assets/lustful-love-cover.png";
import octoberCover from "@/assets/26october-cover.jpg";
import codenameCover from "@/assets/codename-cover.png";
import codenameEgovCover from "@/assets/codename-egovernance-cover.png";

const books = [
  {
    id: "lustful-love",
    title: "Lustful Love",
    subtitle: "A Sizzling Erotica",
    cover: lustfulLoveCover,
    status: "Published",
    year: "2020",
    releaseDate: "December 2020",
    category: "Erotic Romance",
    isLatest: true,
  },
];

const comingSoonBooksData = [
  {
    id: "codename-egovernance",
    title: "Codename: eGovernance",
    subtitle: "Where Policy Meets Code in the Machinery of Government",
    cover: codenameEgovCover,
    status: "Coming Soon",
    releaseDate: "Q1, 26-27",
    category: "eGovernance",
    storyline:
      "Large public systems don't fail for lack of intent or technology - they fail because something breaks between policy and execution. This book examines that missing layer, where reforms must survive audit, scale, field reality, and political pressure. It reveals the patterns that decide whether public systems stabilize quietly - or unravel after they're declared complete.",
  },
  {
    id: "26-october-ki-raat",
    title: "26 October ki Raat",
    subtitle: "Where Lust Meets Suspense",
    cover: octoberCover,
    status: "Coming Soon",
    releaseDate: "Q2, 26-27",
    category: "Romantic Thriller",
    storyline:
      "On a fateful Chabbis October ki Raat, love and darkness collide. During a train journey, Riya, an aspiring writer, meets Arjun, a magnetic stranger. Attraction is instant, but danger lurks beneath the surface. As passion deepens, secrets unravel. Riya begins to see the darkness behind Arjun's charm, and desire turns into a perilous game of trust, obsession, and survival.",
  },
  {
    id: "codename-untitled",
    title: "Codename: Untitled",
    subtitle: "They loved. They lived. They never stopped.",
    cover: codenameCover,
    status: "Coming Soon",
    releaseDate: "Q4, 26-27",
    category: "Intense Love Story",
    storyline:
      "Some love stories begin quietly. This one began with a message and never truly ended. They loved deeply, but life demanded choices love could not make. Years passed. Paths changed. Yet something remained, steady and unspoken. Not all love stories end in togetherness. Some end in understanding.",
  },
];

const categories = ["All", "Erotic Romance", "Romantic Thriller", "Pure Intense Love Story", "eGovernance"];

const Books = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const latestBook = books.find((book) => book.isLatest);
  const allBooks = selectedCategory === "All" ? books : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Books & Writing | Dr. Om Mahajan – Fiction, Poetry & Suspense"
        description="Discover novels, poetry, and reflective writing by Dr. Om Mahajan, exploring human emotion, suspense, and psychological depth."
        keywords={[
          "Dr. Om Mahajan",
          "Lustful Love",
          "26 October ki Raat",
          "Indian fiction author",
          "Erotic Romance",
          "Erotic thriller novelist",
          "Author with tech background",
          "Technology and storytelling",
          "Narrative-driven leadership",
        ]}
        url="/books"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="container-blog">
          {/* Hero Section - Compact */}
          <div className="relative mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left: Title & Subtitle */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-medium mb-3">
                  <span>Author & Storyteller</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Books</h1>
                <p className="text-sm text-muted-foreground max-w-lg leading-relaxed mt-2">
                  Exploring diverse themes from romance to thrillers. Click on any cover for details and purchase links.
                </p>
              </div>
            </div>
          </div>

          {/* Latest Release Section */}
          {latestBook && (
            <section id="latest" className="mb-20">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-border" />
                <h2 className="text-xl md:text-2xl font-semibold text-primary">Latest Release</h2>
                <div className="h-px flex-1 bg-border" />
              </div>

              <Link to={`/books/${latestBook.id}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[2/3] max-w-sm mx-auto md:mx-0 overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={latestBook.cover}
                    alt={latestBook.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                    {latestBook.title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-6">{latestBook.subtitle}</p>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded">{latestBook.category}</span>
                    <span className="text-muted-foreground">Published: {latestBook.year}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Nick is tired of being single after a life of constant moves. All he wants now is a real connection:
                    long-term, meaningful, and passionate.
                    <br />
                    <br />
                    Then he meets Gabby. He's ordinary and inexperienced. She's dazzling, almost unreal. Desire sparks
                    instantly but staying together proves dangerous. Jealous rivals, twisted strangers, and chilling
                    threats close in.
                    <br />
                    <br />
                    Is this Nick's dream finally coming true, or the beginning of another devastating end?
                  </p>
                  <Button size="lg">Get Your Copy</Button>
                </div>
              </Link>
            </section>
          )}

          {/* Coming Soon Section */}
          <section id="coming-soon" className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-xl md:text-2xl font-semibold text-primary">Coming Soon</h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {comingSoonBooksData.map((book) => (
                <div key={book.id} className="group">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    <div className="relative aspect-[2/3] max-w-xs mx-auto sm:mx-0 overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Coming Soon
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{book.title}</h3>
                      <p className="text-sm text-muted-foreground italic mb-4">{book.subtitle}</p>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded">{book.category}</span>
                        <span className="text-xs text-muted-foreground">Expected: {book.releaseDate}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{book.storyline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Browse All Books Section */}
          <section id="all-books">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-xl md:text-2xl font-semibold text-primary">Browse All Books</h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {allBooks.map((book) => (
                <Link key={book.id} to={`/books/${book.id}`} className="group block">
                  <div className="relative aspect-[2/3] mb-3 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {book.status === "Coming Soon" && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Soon
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Books;
