package types

type Source struct {
	Name      string `json:"name"`
	URL       string `json:"url"`
	Category  string `json:"category"`
	Structure string `json:"structure"`
}

type News struct {
	Title    string `json:"title"`
	URL      string `json:"url"`
	Source   string `json:"source"`
	Category string `json:"category"`
	Date     string `json:"date"`
	Summary  string `json:"summary"`
	ImageUrl string `json:"imageUrl"`
}

type Category struct {
	Name string `json:"name"`
}
