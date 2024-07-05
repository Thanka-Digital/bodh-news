package types

type Source struct {
	Name      string `json:"name"`
	URL       string `json:"url"`
	Category  string `json:"category"`
	Structure string `json:"structure"`
}

type News struct {
	URL      string `json:"url"`
	Name     string `json:"name"`
	Source   string `json:"source"`
	Category string `json:"category"`
}

type Category struct {
	Name string `json:"name"`
}
