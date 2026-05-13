type ProfileLike = {
  id?: string;
  email?: string | null;
  plano?: string | null;
  status?: string | null;
  access_expires_at?: string | null;
};

export function isProfileActive(profile: ProfileLike | null | undefined) {
  if (!profile) return false;
  const status = String(profile.status || '').toLowerCase().trim();
  const plan = String(profile.plano || '').toLowerCase().trim();
  const expiresAt = profile.access_expires_at ? new Date(profile.access_expires_at) : null;

  return (
    ['active', 'ativo'].includes(status) &&
    ['pro', 'pró', 'premium'].includes(plan) &&
    !!expiresAt &&
    !Number.isNaN(expiresAt.getTime()) &&
    expiresAt.getTime() > Date.now()
  );
}
