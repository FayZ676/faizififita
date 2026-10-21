export type Release = { version: string; size?: number };

// The latest GitHub release of `repo`: its version, and the size of its `asset` download
export async function latestRelease(repo: string, asset: string): Promise<Release | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`);
    if (!res.ok) return null;
    const release: { tag_name: string; assets: { name: string; size: number }[] } = await res.json();
    return {
      version: release.tag_name.replace(/^v/, ""),
      size: release.assets.find((a) => a.name === asset)?.size,
    };
  } catch {
    return null;
  }
}
