interface RepositoryItemProps {
  repository: {
    name: String;
    description : String;
    html_url: string;
  }
}

export function RepositoryItem ({ repository} : RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}